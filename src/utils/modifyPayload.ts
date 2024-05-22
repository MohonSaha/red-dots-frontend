// Modify json data to form data

export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  // append data
  formData.append("data", data);
  // append image
  formData.append("file", file as Blob);

  return formData;
};
