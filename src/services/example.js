import baseService from "@/services/axios";

export const test = (cabinetUuid) => {
  const api = "/api/v1/getInvoiceImg";
  return baseService.get(api, { params: { cabinetUuid } });
};

export const submitTask = (data) => {
  const api = "/api/v1/submitTask";
  return baseService.post(api, { ...data });
};
