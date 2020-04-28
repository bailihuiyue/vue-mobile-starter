export const createFormData = (formDatas, file) => {
  const formData = new FormData();
  if (file.length) {
    file.map((item) => {
      formData.append("file", item);
    });
  } else {
    formData.append("file", file);
  }
  for (const item in formDatas) {
    formData.append(item, formDatas[item] || "");
  }
  return formData;
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const removeNullData = (data) => {
  let obj = {};
  for (let k in data) {
    if (data[k] !== null) {
      obj[k] = data[k];
    }
  }
  return obj;
};

// 只网表单里塞注册过的值,以免报warning,并且过滤掉null
export const getUnNullQ1_Q10 = (data) => {
  const keys = [
    "clInvoiceType",
    "clHandwrittenInvoiceSeal",
    "clAddedValueTaxInvoice",
    "clInvoicePurpose",
    "clInvoiceRealPurpose",
    "clInvoiceDate",
    "clClientName",
    "clInvoiceAmount",
    "clRemark",
    "clCallOutResult",
  ];
  let obj = {};
  keys.forEach((item) => {
    data[item] &&
      (obj[item] =
        item === "clInvoiceRealPurpose" && !Array.isArray(data[item])
          ? data[item].split(",")
          : data[item]);
  });
  return obj;
};

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://10.64.84.26:9999"
    //  ?"http://hswcfc-invoice-checking-queue-api.uat.homecredit.cn/invoice-checking-queue-api"
      // ?"http://10.64.84.21:8080/invoice-checking-queue-api" //longhua
      // ?'http://10.64.84.5:8080/' //yuyang
      : window.baseURL; //环境配置
