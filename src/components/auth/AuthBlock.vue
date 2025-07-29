<template>
  <div class="auth">
    <h2>{{$t('login')}}</h2>
    <form action="">
      <label for="login">{{$t('log_in')}}</label>
      <input type="text" id="login">
      <label for="password">{{$t('password')}}</label>
      <input type="password" name="" id="password">
      <button type="submit">{{$t('login')}}</button>
    </form>
    <div class="auth_link">
      <router-link class="outline_bttn text_s">
        {{$t('signup')}}
      </router-link>
      <router-link class="text_xs">
        {{$t('forget_password')}}
      </router-link>
    </div>
  </div>
</template>