function status(request, response) {
  response.status(200).json({ "chave": "API is running" });
}

export default status;