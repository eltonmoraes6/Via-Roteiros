//How to use: sortByQuery( req, Users,'client', '_id name familyName fullName gender address isActive')
export const sortByQuery = async (req, model, modelForeignKey, modelItems) => {
  //BUILD QUERY
  // 1A) Filtering
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);

  //1B) Advanced filtering
  let queryString = JSON.stringify(queryObj);
  queryString = queryString.replace(
    /\b(eq|gte|gt|lte|lt)\b/g,
    (match) => `$${match}`
  );
  let query = model
    .find(JSON.parse(queryString))
    .populate(modelForeignKey, modelItems);

  let objLength = model.find(JSON.parse(queryString)).count();

  // 2) Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  //3) Field Limiting
  // Select pattern  .select("firstParam secondParam"), it will only show the selected field, add minus sign for excluding (include everything except the given params)
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // 4) Pagination
  // page=2&limit=10, 1-10 page 1, 11-20 page 2, 21-30 page 3
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  //EXECUTE QUERY
  const data = await query;

  const count = await objLength;

  return { count, data };
};

export default sortByQuery;
