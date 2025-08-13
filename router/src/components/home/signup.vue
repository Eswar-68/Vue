<template>
<div class="outer-div">
    <div class="div-container">
        <form class="form-container" @submit.prevent="handleSubmit">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required v-model="newdetail.name">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required v-model="newdetail.email">
            <label for="mobile">Mobile</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" required v-model="newdetail.mobile">
            <label for="gender">Gender</label>
            <select id="gender" name="gender" v-model="newdetail.gender">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
            <button type="submit">Submit</button>
            <div class="form-footer">
                (or)
                Sign in using
                <div class="social-buttons">
                  <button style="background-color: red;" type="button">G</button>
                  <button style="color: black; background-color: silver;" type="button">A</button>
                  <button style="background-color: purple;" type="button">Y</button>
                  <button type="button">M</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup>
    import { provide } from 'vue';
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    const route=useRouter();
    var newdetail=reactive({
        name:"",
        email:"",
        mobile:"",
        gender:"",
    });

    var detail=reactive([]);
    function handleSubmit(){
      console.log("handleSubmit");
      detail.push({...newdetail});
      newdetail.name="";
      newdetail.email="";
      newdetail.subject="";
      newdetail.message="";
      route.push('/');
    }

</script>
<style scoped>

    .outer-div {
      box-sizing: border-box;
      background: linear-gradient(135deg, #74ebd5, #acb6e5);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

     .div-container{
      min-height: 100vh;
      max-height: 110vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form-container {
      margin: 10%;
      size: 30%;
      background-color: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 400px;
    }

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #333;
    }

    label {
      display: block;
      margin: 0.5rem 0 0.2rem;
      color: #555;
      font-weight: 600;
    }

    input, select {
      width: 100%;
      padding: 0.6rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    input:focus, select:focus {
      border-color: #007bff;
      outline: none;
    }

    button {
      width: 100%;
      padding: 0.7rem;
      background-color: #007bff;
      border: none;
      color: white;
      border-radius: 8px;
      font-size: 1rem;
      margin-top: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    .form-footer {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #777;
    }

    .social-buttons {
      display: flex;
      gap: 10%;
      align-items: center;
      justify-content: center;
    }
    .social-buttons button {
      padding: 0%;
      width:30px;
      height: 30px;
      font-size: 14px;
      border-radius: 4px;
    }

</style>