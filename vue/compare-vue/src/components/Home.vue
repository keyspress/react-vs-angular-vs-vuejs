<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading}}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>We provide bacon and cured meats so your business can succeed against the horrors of veganism!</strong></p>
          </div>
          <div class="column">
            <p>Bacon ipsum dolor amet cupidatat sausage tri-tip short ribs deserunt in kevin. Andouille proident adipisicing, in t-bone chicken kielbasa sed nulla turducken. Cupim excepteur short ribs bacon nostrud fugiat</p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"I think it was absolutely delicious!"</p>
              <p class="subtitle">Bacon Meatson</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Veggies are like white meat chicken only worse!!"</p>
              <p class="subtitle">Chuck Roast</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Ich ein Hamburger!"</p>
              <p class="subtitle">Weiner Schnitzel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      heading: 'Soaring to new heights',
      subheading: 'Spicy jalapeno bacon ipsum dolor amet laboris pig incididunt biltong tempor shankle, consequat porchetta et nulla chuck occaecat short loin magna. Ham hock mollit tail, bresaola capicola laborum leberkas corned beef cupidatat rump proident id fugiat pastrami. Bresaola nisi strip steak, tongue ham irure andouille ut rump in kevin. Nisi voluptate occaecat tenderloin minim.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../mq"

.hero
  background: url("https://tse1.mm.bing.net/th?id=OIP.L2lk1GVEBxFbQXWmYX3n5wHaFP&w=296&h=207&c=7&o=5&pid=1.7")
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0
</style>
