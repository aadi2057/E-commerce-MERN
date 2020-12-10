import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Product from "./product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "This is a shoe. ",
    price: "20",
    image:
      "https://assets.ajio.com/medias/sys_master/root/hb6/hd3/13499044003870/-473Wx593H-460345245-white-MODEL.jpg",
  },
  {
    id: 2,
    name: "Shirt",
    description: "This is a shirt. ",
    price: "10",
    image:
      "https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-T-Shirt-Men-Cotton-T-Shirt-Full-Sleeve-tshirt-Men-Solid-Color-T-shirts-tops.jpg_640x640.jpg",
  },
];

const Products = () => {
  useEffect(() => {
    document.title = "Products";
  });
  const classes = useStyles();
  return (
    <div>
      {/* <h1>Products</h1> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Products;
