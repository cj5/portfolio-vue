<template>
  <div class="container flex jcb w-100">
    <div class="left">
      <a class="link-1 goto-top">
        <h1 class="page-title">Chris Stack</h1>
        <svg class="icon icon-arrow-up"><use xlink:href="#icon-arrow-up"></use></svg>
      </a>
    </div>
    <div class="right">
      <nav>
        <ul class="flex">
          <li>
            <a class="link-1 goto-projects">Projects</a>
          </li>
          <li>
            <a class="link-1 goto-resume">Résumé</a>
          </li>
          <li>
            <a class="link-1 goto-contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent'
}
</script>