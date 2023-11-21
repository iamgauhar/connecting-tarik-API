## 1. What is Connectibg Tarik API?
Connecting Tarik is the most famous electronic shop in my nearest city. This site was made by three members in around 30 days.

## 1. Teck stack and tools used in this project.
 <p>
   <img style="width:72px" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/javascript"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/tailwindcss"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/nodejs.png"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/express-js"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/mongodb"/>
   <img style="width:72px" src="https://img.icons8.com/color/512/000000/firebase"/>
   <img style="width:72px" src="https://nodemailer.com/nm_logo_200x136.png"/>
   <img style="width:72px" src="https://jwt.io/img/pic_logo.svg"/>
 </p>

### (I) Other tools.
 - bcryptjs
 - cors
 - dotenv
 - exprss-validator
 - mysql2
 - nanoid
 - winston
 - more...
 

## 2. Connecting Tarik API Project Github URL
- **Backend API:** [﻿https://github.com/iamgauhar/connecting-tarik-API](https://github.com/iamgauhar/connecting-tarik-API) 
- **Frontend-Client:** [﻿https://github.com/iamgauhar/connecting-tarik-client](https://github.com/iamgauhar/connecting-tarik-client) 
- **Frontend-CMS:** [﻿https://github.com/iamgauhar/connecting-tariq-CMS](https://github.com/iamgauhar/connecting-tariq-CMS) 
## 3. Project-deployed links
- **Backend API:**[﻿https://good-pear-crab-cape.cyclic.app/](https://good-pear-crab-cape.cyclic.app/) 
- **Frontend-Client:** [﻿https://connectingtarik.netlify.app/](https://connectingtarik.netlify.app/) 
- **Frontend-CMS:** [﻿https://cmsconnectingtarik.netlify.app/](https://cmsconnectingtarik.netlify.app/)  
**To login to CMS:**

     Email: `iamgauhar.in@gmail.com`  and  Password: `123456` .

## 4. API Endpoints?
- **Base URL** `﻿[﻿good-pear-crab-cape.cyclic.app](https://good-pear-crab-cape.cyclic.app/)` 
### (I). Authentication Endpoints.
- **Auth base endpoint:**
```
good-pear-crab-cape.cyclic.app/auth
```
- **User Signup Endpoint:**
```
`﻿POST` good-pear-crab-cape.cyclic.app/auth/signup
```
The signup endpoint will accept  `first_name (required), last_name, and email (required)`, and after making a POST request, it will send a confirmation email to the user with a confirmation link. The verification link contains `userID` and `token` to verify the user.

﻿good-pear-crab-cape.cyclic.app 

- **User login endpoint:**
```
`﻿POST` good-pear-crab-cape.cyclic.app/auth/login
```
This endpoint will take `email` and `password` to verify the user and let you use our services.

### (II). Category endpoints.
- **Base Endpoint:**  ﻿`good-pear-crab-cape.cyclic.app/category` 
- **Create Category:** To create a category to add in products, you have to create category first and it will take `categoryName and categoryImage` 
```
`﻿POST` good-pear-crab-cape.cyclic.app/category/add
```
But you have to send the request as `formData` 

- **Fetch all categories:** To fetch all categories, you have to make a get request on this endpoint.
```
`﻿GET` good-pear-crab-cape.cyclic.app/gategory/all
```
It will take `original_url` from `req.body` and after proccesing retuns shorten URL.

- **Fetch particular category by categoryID:** for this, make get request by using `categoryId` 
```
`﻿GET` good-pear-crab-cape.cyclic.app/category/:categoryId
```
- **Fetch categories by category name:** For this, make a request by `categoryName` 
```
`﻿GET` good-pear-crab-cape.cyclic.app/category/categoryName
```
### (III). Products endpoints.
- **Base Endpoint**  `good-pear-crab-cape.cyclic.app/product` 
- **Add Product:** To add a product, you have to use this endpoint It take `title, price, description, category,` and shows the price `true or false` .
```
`﻿POST` good-pear-crab-cape.cyclic.app/product/add
```
- **Fetch all products:** To fetch all products, you have to make a get request on this endpoint.
```
`﻿GET` good-pear-crab-cape.cyclic.app/product/all
```
- **Fetch specific products:** for this, make a get request by using `productId` 
```
`﻿GET` good-pear-crab-cape.cyclic.app/product/get/:productId
```
- **Fetch products by category:** For this, make a get request by `categoryId`  and send it from `params` 
```
`﻿GET` good-pear-crab-cape.cyclic.app/product/:categoryId
```
- **Update product**: To update the product, make a `PATCH`request on this endpoint and send it from `params` 
```
`﻿PATCH` good-pear-crab-cape.cyclic.app/product/update/:productId
```
- Delete product: To delete a product, make a `DELETE` request and send `productId` from `params` 
```
`﻿DELETE` good-pear-crab-cape.cyclic.app/product/delete/:productId
```
### (IV). Crousel endpoints.
- **Base Endpoint**  `url-shortener-mg.cyclic.app/crousel` 
- **Create Crousel:** In this crousel, you can list new products or offers that are going on, and here are the four latest slides that will be shown on this crousel. To do that, it will take `Image and Link`.
```
`﻿POST` good-pear-crab-cape.cyclic.app/crousel/post
```
- **Fetch crousel:** To get all slides, just make a `GET` request on this endpoint.
```
`﻿GET` good-pear-crab-cape.cyclic.app/crousel/get
```
### (V). Social endpoints.
- **Base Endpoint**  `url-shortener-mg.cyclic.app/social` 
- **Add YouTube link:** You can list three YouTube video links to show on your website
```
`﻿POST` good-pear-crab-cape.cyclic.app/social/new
```
- **Fetch video links:** To get all the slides, just make a `GET` request on this endpoint.
```
`﻿GET` good-pear-crab-cape.cyclic.app/social/youtube
```
### (VI). Customer endpoints.
- **Base Endpoint**  `url-shortener-mg.cyclic.app/customer` 
- **Upload customer photos:** You can also upload customer photos to enhance the customer experience. It will take `image and Name`.
```
`﻿POST` good-pear-crab-cape.cyclic.app/customer/upload
```
- **Fetch customer photos:** To get all the photos, just make a `GET` request on this endpoint.
```
`﻿GET` good-pear-crab-cape.cyclic.app/customer/get
```


---

Thank you 😊.

Mohammad Gauhar

Email: [﻿iamgauhar@gmail.com](mailto:iamgauhar@gmail.com) 

