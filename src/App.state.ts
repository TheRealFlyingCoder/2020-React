const AppState: AppState = {
    //This is where your global state goes
    //It's just a JS object so weave it together however you like!
    //e.g
    //Initialised: false,
    //User: null,
};

//Async App State 
//
//lets you make API calls and populate data before render
//ensuring all your components can be slightly "dumb" in assuming the data is already in place
// const AsyncState = async(): Promise<AppState | null> => {
//     try {
//         const response = await apiRequest();
//         return {
//             data: response
//         }
//     } catch (err) {
// 		console.log(err);
// 		return null;
// 		//Render Error page or handle redirects
// 	}
// }

export default AppState;