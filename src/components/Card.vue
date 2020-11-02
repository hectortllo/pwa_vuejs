<template>
  <div v-if="places !== null" class="card">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <div class="all-cards" v-for="place in places" :key="place.id">
      <div class="card-image">
        <img :src="place.image.url" alt="">
      </div>
      <div class="card-information">
        <p><strong>{{ place.name }}</strong></p>
        <p>{{ place.description }}</p>
        <p>{{ place.location }}</p>
        <p><a><i class="far fa-thumbs-up"></i></a> {{ place.score }}</p>
        <a class="rounded"><i class="fas fa-heart"></i></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    places: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .card {
    background-color: #fefdfd;
    display: flex;
    flex-wrap: wrap;
    width: 92%;
    margin: 4%;
  }

  .fas-fa-heart {
    background-color: rgb(16, 17, 95);
  }

  .all-cards {
    background-color: inherit;
    height: 500px;
    width: inherit;
    margin: inherit;
  }

  .card-image {
    height: 75%;
    width: 100%;
  }

  .card-image img {
    height: 100%;
    width: 100%;
  }

  .card-information {
    height: 25%;
    width: 100%;
  }

  .rounded {
    background-color: #31b189;
    border-radius: 50%;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    background-color: #7ace67;;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .fas {
    color:#feffff;
    margin-top: 10px;
  }

  @media (min-width: 480px) {
    .card {
      display: flex;
      justify-content: center;
    }
    .all-cards {
      width: 46%;
      margin: 2%;
    }
  }
  @media (min-width: 1000px) {
    .card {
      display: flex;
      justify-content: center;
    }
    .all-cards {
      width: 29%;
      margin: 2%;
    }
  }
</style>
