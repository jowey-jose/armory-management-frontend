import http from "../http-common";

class ArmoryDataService {
  getAll() {
    return http.get("/armories");
  }
  get(id) {
    return http.get(`/armories/${id}`);
  }
  create(data) {
    return http.post("/armories", data);
  }
  update(id, data) {
    return http.put(`/armories/${id}`, data);
  }
  delete(id) {
    return http.delete(`/armories/${id}`);
  }
  deleteAll() {
    return http.delete(`/armories`);
  }
  findByTitle(title) {
    return http.get(`/armories?title=${title}`);
  }
}
export default new ArmoryDataService();