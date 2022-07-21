<script setup>
import questionService from "../services/questions";
</script>

<template>
  <div class="w-[464px]">
    <h1 class="uppercase font-bold text-white text-4xl">Country Quiz</h1>
    <div class="relative my-3 bg-white rounded-3xl px-8 pb-8 pt-[68px]">
      <img
        src="../assets/undraw_adventure_4hum 1.svg"
        alt=""
        class="mb-6 absolute right-0 top-[-74px]"
      />
      <div class="font-bold text-2xl text-[#2F527B]">
        Kuala Lumpur is the capital of
      </div>
      <div
        class="text-[#6066D0] rounded-xl border-2 border-[#6066D0] my-6 hover:bg-[#F9A826] hover:text-white hover:cursor-pointer hover:border-[#F9A826]"
      >
        <div class="font-medium inline-block text-2xl py-[10px] px-5">A</div>
        <div class="text-lg py-[14px] inline-block px-8">Vietnam</div>
      </div>
      <div
        class="text-[#6066D0] rounded-xl border-2 border-[#6066D0] my-6 hover:bg-[#F9A826] hover:text-white hover:cursor-pointer hover:border-[#F9A826]"
      >
        <div class="font-medium inline-block text-2xl py-[10px] px-5">B</div>
        <div class="text-lg py-[14px] inline-block px-8">Malaysia</div>
      </div>
      <div
        class="text-[#6066D0] rounded-xl border-2 border-[#6066D0] my-6 hover:bg-[#F9A826] hover:text-white hover:cursor-pointer hover:border-[#F9A826]"
      >
        <div class="font-medium inline-block text-2xl py-[10px] px-5">C</div>
        <div class="text-lg py-[14px] inline-block px-8">Sweden</div>
      </div>
      <div
        class="text-[#6066D0] rounded-xl border-2 border-[#6066D0] my-6 hover:bg-[#F9A826] hover:text-white hover:cursor-pointer hover:border-[#F9A826]"
      >
        <div class="font-medium inline-block text-2xl py-[10px] px-5">D</div>
        <div class="text-lg py-[14px] inline-block px-8">Austria</div>
      </div>
    </div>
    <button @click="questionService.getRandomQuestion">TEST</button>
  </div>
</template>
