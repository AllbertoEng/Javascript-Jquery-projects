var listFilter =  '',
    listElement = document.getElementById('pokeList'),
    inputElement = document.getElementById('pokeFilter'),
    pokeballElement = document.getElementById('pokeballBack');

function setList(){
    PokeService.listAll(function(pkmList){
        var list = filterList(pkmList);
        var template = ListService.CreateList(list);
        listElement.innerHTML = template;
    })
}

function filterList(pkmList){
    return pkmList.filter(function(pkm){
        return pkm.name.indexOf(listFilter.toLowerCase()) !== -1;
    })
}

setList();