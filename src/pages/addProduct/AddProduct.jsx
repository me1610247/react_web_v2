import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Nav from "../../components/Nav/Nav";

const AddProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();

  // form validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Product Name is Required"),
    image: yup.string().url().required("Please enter the image url"),
    price: yup
      .number()
      .typeError("Amount Must be Number")
      .integer()
      .positive()
      .required("Please enter the product price"),
    category: yup.string(),
    description: yup
      .string()
      .typeError("description Must be text")
      .required("Enter the product description"),
  });

  // useForm Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (response.status === 201) {
        console.log(response);
        reset();
        navigate("/home");
        setProducts([...products, data]);
      } else {
        console.log("error");
        alert("error");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Container sx={{ width: "40%" }}>
      <Box mb={7}>
        <Nav />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Product Name"
          variant="outlined"
          type="text"
          fullWidth
          margin="normal"
          {...register("name")}
        />
        {errors.name && (
          <Typography variant="caption" color="red" display="block">
            {errors.name?.message}
          </Typography>
        )}

        <TextField
          label="Image"
          type="url"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("image")}
        />
        {errors.image && (
          <Typography variant="caption" color="red" display="block">
            {errors.image?.message}
          </Typography>
        )}

        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="text"
          margin="normal"
          {...register("price")}
        />
        {errors.price && (
          <Typography variant="caption" color="red" display="block">
            {errors.price?.message}
          </Typography>
        )}

        <TextField
          label="Description"
          variant="outlined"
          type="text"
          fullWidth
          margin="normal"
          {...register("description")}
        />
        {errors.description && (
          <Typography variant="caption" color="red" display="block">
            {errors.description?.message}
          </Typography>
        )}

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
