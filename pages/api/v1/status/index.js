function status(request, response) {
  response.status(200).json({ msg: "só um teste" });
}
export default status;
