import request from '../../utils/request'

function gethome() {
  return request.Get("/api/v1/gethome");
}
export {
  gethome
}