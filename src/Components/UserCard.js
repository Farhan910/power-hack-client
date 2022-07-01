import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const UserCard = ({ user, index }) => {
  const id = user._id;

  const { isLoading, refetch } = useQuery();
  const total = parseInt(user.paidAmount) + parseInt(user.paidAmount);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("worked");

    const bills = {
      fullName: data.fullName,
      email: data.email,
      phone: parseInt(data.phone),
      paidAmount: data.paidAmount,
    };
    console.log(bills);

    if (bills.fullName && bills.email && bills.phone && bills.paidAmount) {
      fetch(`https://desolate-meadow-34032.herokuapp.com/billing-list/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bills),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal("Success", "Your Bills successfully updated!", "success");
        });
      refetch();
    }
  };

  const handleDelete = () => {
    fetch(`https://desolate-meadow-34032.herokuapp.com/billing-list/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    swal("Success", "Your Bills successfully deleted!", "success");
  };

  return (
    <div>
      <div className="grid lg:grid-cols-6 grid-cols-1 px-28  ">
        <div>
          <h1 className="border  h-10  pl-2">{user._id}</h1>
        </div>
        <div>
          <h1 className="border h-10  pl-2">{user.fullName}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2 ">{user.email}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2">{user.phone}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2">{user.paidAmount}</h1>
        </div>
        <div>
          <h1 className="border  h-10 ">
            <tr class="whitespace-nowrap">
              <td className="pl-3 py-2">
                <label
                  href=""
                  for="my-modal-7"
                  class=" link  px-4 py-1 mb-2 text-sm text-blue-600 bg-blue-200 rounded-full"
                >
                  Edit
                </label>
              </td>

              <input type="checkbox" id="my-modal-7" class="modal-toggle" />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text text-xl">Update Bill </span>
                      </label>
                      <div>
                        <input
                          type="text"
                          placeholder="Your full name"
                          className="input input-bordered w-full mb-2 max-w-xs"
                          {...register("fullName", {
                            required: {
                              value: true,
                              message: "Please enter your name",
                            },
                          })}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Your email"
                          className="input input-bordered w-full mb-2 max-w-xs"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Please add a email",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid email",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Your phone number"
                          className="input input-bordered w-full mb-2 max-w-xs"
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "Please add a Phone Number",
                            },
                            minLength: {
                              value: 11,
                              message: "Must be 11 Digits",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.phone?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.phone.message}
                            </span>
                          )}
                          {errors.phone?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                              {errors.phone.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="billing amount"
                          className="input input-bordered w-full mb-2 max-w-xs"
                          {...register("paidAmount", {
                            required: {
                              value: true,
                              message: "Please add a task",
                            },
                          })}
                        />
                      </div>
                    </div>

                    <input
                      className="btn w-full max-w-xs mt-5 text-white"
                      type="submit"
                      value="Add "
                    />
                  </form>
                  <div class="modal-action">
                    <label for="my-modal-7" class="btn">
                      Cancel
                    </label>
                  </div>
                </div>
              </div>
              <td class="px-6 ">
                <button
                  onClick={handleDelete}
                  class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
                >
                  Delete
                </button>
              </td>
            </tr>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
