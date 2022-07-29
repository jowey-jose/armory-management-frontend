import http from "../http-common";

const getAll = () => {
  return http.get("/armories");
};

const get = id => {
  return http.get(`/armories/${id}`);
};

const create = data => {
  return http.post("/armories", data);
};

const update = (id, data) => {
  return http.put(`/armories/${id}`, data);
};

const remove = id => {
  return http.delete(`/armories/${id}`);
};

const removeAll = () => {
  return http.delete(`/armories`);
};

const findByTitle = title => {
  return http.get(`/armories?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
