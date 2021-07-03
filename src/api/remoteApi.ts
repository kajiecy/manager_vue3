import request from "@/utils/request";
export function memberList(params: any) {
  return request({ url: "/member/list", method: "get", params: params });
}
