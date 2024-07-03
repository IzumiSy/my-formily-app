import { FormLayout } from "@formily/antd";
import { createForm } from "@formily/core";
import { FormProvider } from "@formily/react";

function App() {
  const form = createForm();

  return (
    <>
      <h1>Vite + React</h1>
      <FormProvider form={form}>
        <FormLayout></FormLayout>
      </FormProvider>
    </>
  );
}

export default App;
