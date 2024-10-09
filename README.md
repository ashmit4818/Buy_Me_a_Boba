# 🚀 BuyMeABoba  🧋💻  

**BuyMeABoba** is a project inspired by BuyMeACoffee. This project explores payment gateway integration using PayPal’s REST API, backend development with Node.js and Express, and API handling with Axios.  

## 🛠️ Tech Stack  

- **Frontend:** HTML, CSS, EJS (for templating)  
- **Backend:** Node.js, Express  
- **API Handling:** Axios for PayPal API requests  

## 🔑 Key Features  

1. **Payment Creation Flow:**  
   - When a user clicks the **"Contribute"** button, a request is sent to PayPal’s Orders API to create an order.  
   - The order includes **“Boba Tea”** 🧋 (a symbolic donation) with a static price and quantity, configured through static JSON payloads.  

2. **Payment Capture:**  
   - Upon payment completion, the `/complete-order` route captures the payment using the PayPal Orders API.  

3. **Error Handling & User Experience:**  
   - If the payment fails, the `/cancel-order` route redirects the user back to the homepage.  
   - The backend includes **try-catch blocks** for smooth error handling during API calls.  


## 🛠️ Getting Started  

Follow these steps to set up the project on your local machine:  

### Prerequisites  
1. **Node.js** and **npm** installed – [Download Node.js](https://nodejs.org/)  
2. PayPal **Developer Account** – [PayPal Developer Dashboard](https://developer.paypal.com/)  
3. A code editor like **VS Code**  


## 🛠️ Installation & Setup  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/ashmit4818/Buy_Me_a_Boba.git
   cd Buy_Me_a_Boba
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables:**  
- Create a `.env` file in the root directory and add the following environment variables:  
  ```
  PORT="3000"
  # PayPal Client ID and Secret from Sandbox Business Account
  PAYPAL_CLIENT_ID="<Your PayPal Client ID>"  
  PAYPAL_SECRET="<Your PayPal Secret>"  
  
  # Base URL for PayPal Sandbox API (use https://api-m.paypal.com for live transactions)
  PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com  
  BASE_URL= https:localhost:3000 || <Your Application URL>  # URL of the site (if deployed)
  ```

4. **Run the Application:**  
   ```bash
   npm start
   ```


5. **Open the Application:**  
- Visit `http://localhost:3000` in your browser.  



## 🔑 How to Get PayPal Credentials and Use Sandbox Accounts  

### Step 1: Create a PayPal Developer Account  
1. Go to the [PayPal Developer Dashboard](https://developer.paypal.com/).  
2. Sign in with your PayPal account or create a new one.  

### Step 2: Create a Sandbox App  
1. From the dashboard, click on **My Apps & Credentials** under **Dashboard**.  
2. Select **Sandbox** and click on **Create App**.  
3. Name your app and click **Create App**.  
4. After creation, you’ll receive the following credentials for the REST API app created inside the sandbox business account:  
- **Client ID**  
- **Secret Key**  

### Step 3: Configure Sandbox Accounts  
1. In the **Sandbox > Accounts** section, you’ll see two default accounts:  
- **Business Account:** Used to create and manage payments.  
- **Buyer Account:** Used to simulate test payments.  

2. Click on the **Buyer Account** and use the provided credentials for testing.  



## 🧪 How to Test the Payment Gateway  

1. **Run the Application Locally:**  
- Start the server:  
  ```
  npm start
  ```  
- Open `http://localhost:3000` in your browser.  

2. **Initiate a Payment:**  
- Click on the **Contribute** button to create an order.  

3. **Complete the Payment Using Sandbox Buyer Credentials:**  
- When redirected to the PayPal payment page, log in using the **Buyer Sandbox Account** credentials from the PayPal Developer Dashboard.  





## 🧑‍💻 Author  

Developed by [Ashmit Dwivedi](https://www.ashmitdev.site/).  



## 🔗 Links  

- **Live Deployment:** [BuyMeABoba on Render](https://buy-me-a-boba.onrender.com/)  
- **GitHub Repository:** [BuyMeABoba on GitHub](https://github.com/ashmit4818/Buy_Me_a_Boba)  
- **Portfolio Website:** [Ashmit's Portfolio](https://www.ashmitdev.site/)  



## 📜 License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

## 🙌 Acknowledgments  

- **PayPal Developer Team** for the detailed documentation on their REST API.  
- Inspired by **BuyMeACoffee**.  