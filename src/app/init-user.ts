export class Init{
    load() {
        if(localStorage.getItem('userinfo') === null || localStorage.getItem('userinfo') == undefined) {
          console.log('No Todos Found... Creating...');
          let users = [
            {
             name:'asssskk',
             mob:'11222',
             email:'sagve@gamil.com',
             pass:'534545'
            }, 
            // {
            //   text: 'Hit the gym'
            // }, 
            // {
            //   text: 'Write some flawless code'
            // }
          ];
    
          localStorage.setItem('todos', JSON.stringify(users));
          return 
        } else {
          console.log('Found Todos...');
        }
      }
}