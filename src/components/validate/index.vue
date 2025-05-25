<template>
  <Form @submit="handleSubmit" :validation-schema="formSchema" class="form">
    <div class="mb-3">
      <label for="email">const</label>
      <Field 
        v-focus 
        name="email" 
        placeholder="Enter your email"
        class="form-control"/>
      <ErrorMessage name="email" as="div" v-slot="{message}">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

  <button class="btn btn-primary">
    Submit
  </button>
  </Form>
</template>

<script setup>
  import { Field, Form, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';

  const formSchema = yup.object({
    name: yup.string()
      .required('The email is required.')
      .max(5, 'Sorry name is longer than 5 characters'),

    email: yup.string()
      .required('The email is required.')
      .email('The email is not valid.')
  });


//  const isRequired = (value) => {
//    if (!value) {
//      return 'This field is required';
//    }
//    return true;
//  }
//  const validateName = (value) => {
//    if (value !== 'Steve') {return true}
//    return 'Go away Steve'
//  }

  function handleSubmit(values, {resetForm}) {
    console.log('Form submitted with values:', values);
    resetForm();
  }

  const vFocus = {
    mounted(el) {
      el.focus();
    }
  }
</script>
