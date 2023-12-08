# WishList ECommerce Website
![amazona](/template/images/Homepage-wishlist.png)

Welcome to my React and Node Website to build a fully-functional e-commerce website exactly like amazon. An e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Website Images

- 👉 Homepage: ![amazona](/template/images/Homepage-wishlist.png)
- 👉 Homepage - Product Section:  ![amazona](/template/images/Homepage-our-products.png)
- 👉 Product and Comment Section:  ![amazona](/template/images/Product-page.png)


## Technologies used

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Redux: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:JohnSalimRobert/FYP-II.git
$ cd FYP-II
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazona  
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 6 sample products

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin
