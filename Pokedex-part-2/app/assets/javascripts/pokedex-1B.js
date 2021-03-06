Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  // var attrs = ["name", "attack", "defense", "poke_type", "moves"];
//   var content = JST['pokemonDetail']({
//     pokemon: pokemon,
//     details: attrs
//   });
//   this.$pokeDetail.html(content);

  // Phase 2C.
  // this.$pokeDetail.append(
  //   '<span style="font-weight: bold;">Toys:</span><br>'
  // );
  // var $toys = $('<ul class="toys"></ul>');
  // this.$pokeDetail.append($toys);

  pokemon.fetch({
    success: (function() {
      this.renderToysList(pokemon.toys());
    }).bind(this)
  });
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  // Phase II
  this.$toyDetail.empty();

  // Phase IB
  var $target = $(event.target);

  var pokeId = $target.data('id');
  var pokemon = this.pokes.get(pokeId);

  this.renderPokemonDetail(pokemon);
};
