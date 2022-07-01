import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddUser = () => {
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
      fetch(`https://desolate-meadow-34032.herokuapp.com/billing-list`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bills),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal("Success", "Your Bills successfully added!", "success");
        });
    }
  };

  return (
    <div className="px-28 mt-12">
      <div className="h-16 bg-gray-200 flex justify-between px-12">
        <div class="form-control mt-2">
          <div class="input-group flex justify-center mb-2">
            <input
              type="text"
              placeholder="Search…"
              class="input input-bordered"
              name="search"
            />
            <button class="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <label for="my-modal-6" class="btn modal-button btn-success mt-2">
          Add Bill
        </label>

        <input type="checkbox" id="my-modal-6" class="modal-toggle mx-auto" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-xl">Add Bill </span>
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
              <label for="my-modal-6" class="btn">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
