import { MapPin, Navigation } from "lucide-react";
import InputField from "../../ui/InputField";

export default function BillingInformation({ register, errors }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Billing Information</h2>
      <div className="space-y-4">
        <InputField
          {...register("recipient name", { required: "Recipient name is required" })}
          type="text"
          label="Recipient Name"
          placeholder="Kwasi Adams"
        />
        {errors["recipient name"] && (
          <p className="text-red-600">{errors["recipient name"].message}</p>
        )}

        <InputField
          {...register("recipient contact", {
            required: "Contact number is required",
            pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
          })}
          type="text"
          label="Recipient Contact"
          placeholder="0502000003"
        />
        {errors["recipient contact"] && (
          <p className="text-red-600">{errors["recipient contact"].message}</p>
        )}

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-800">Delivery Address</label>
          <InputField
            {...register("delivery address", { required: "Delivery address is required" })}
            type="text"
            placeholder="Street address, apartment, floor..."
          />
          {errors["delivery address"] && (
            <p className="text-red-600">{errors["delivery address"].message}</p>
          )}

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 rounded-lg border bg-green-600 px-4 py-2 text-white">
              <Navigation className="h-4 w-4" /> Use Current Location
            </button>
            <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2">
              <MapPin className="h-4 w-4" /> Select on Map
            </button>
          </div>
        </div>

        <textarea
          {...register("order note")}
          placeholder="Add any notes about your order"
          className="w-full resize-none rounded-md border px-4 py-2"
          rows={4}
        />
      </div>
    </div>
  );
}
