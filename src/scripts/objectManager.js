const newLego = (creator, colorId, shape, creation) => {
    const newLego = {
        creator: creator,
        colorsId: parseInt(colorId),
        shape: shape,
        creation: creation
    };
    //calls function to add the new lego to the API, then
    //gets a list of legos and posts them to the console.
    postLego(newLego)
}