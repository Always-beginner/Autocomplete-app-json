// autocomplete app 

const search = document.querySelector('#search');
let  machList = document.querySelector('#mach-list');

search.addEventListener('input',() => searchStates(search.value))

// search states.json and filter data

const searchStates = async searchText => {
    const res = await fetch('/Autocomplete app/data/states.json');
    const states = await res.json();
    // console.log(states);
    
    let  machText = states.filter(state => {
        const regEx = new RegExp(`^${searchText}`,'gi');
        let stateName = state.name.match(regEx);
        let shortName = state.abbr.match(regEx);
        return stateName || shortName 
    })
    if(searchText.length === 0){
        machText = [];
        machList.innerHTML = '';
    }

    output(machText);
}
    const output = machData => {
        if(machData.length > 0){   
            const html = machData.map(data => `<h2>Name : ${data.name} (${(data.abbr)}) Capital : ${data.capital}</h2><h3> Lat : ${data.lat} Long : ${data.long} </h3>`).join('')
            // console.log(html);
            machList.innerHTML = html;
        }
    }

