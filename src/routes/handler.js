const routeResolver = (route) => {
  const resolver = (req, res, next) => {
    try {
      Promise.resolve(route(req, res, next)).catch(next);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

  return resolver;
};

export default routeResolver;
