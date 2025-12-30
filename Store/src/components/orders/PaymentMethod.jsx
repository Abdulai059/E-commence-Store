import RadioCheckbox from "../../ui/RadioCheckbox";

export default function PaymentMethod({ selectedPayment, setSelectedPayment }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-base font-semibold">Payment Method</h2>
      <div className="space-y-3 text-sm">
        <label className="flex items-center gap-3">
          <RadioCheckbox
            name="payment"
            value="mobile"
            checked={selectedPayment === "mobile"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Mobile Money
        </label>

        <label className="flex items-center gap-3">
          <RadioCheckbox
            name="payment"
            value="card"
            checked={selectedPayment === "card"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Credit Card
        </label>
      </div>
    </div>
  );
}
