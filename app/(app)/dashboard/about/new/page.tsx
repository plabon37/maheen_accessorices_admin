import AboutForm from "@/components/about/AboutForm";

export default function NewAboutPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Create About Section
        </h1>

        <p className="mt-2 text-gray-500">
          Fill in all the information below.
        </p>

      </div>

      <AboutForm />

    </div>
  );
}