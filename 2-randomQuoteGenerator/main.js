
//this is our database of quotes : table
const Quotes = [
    {owner:'Malala Yousafzai',quote:' "You are Never Too Old To Set A New Goal Or To Dream a New Dream." '},
    {owner:'Welliam James',quote:' "Beleif Creates The Actual Fact." '},
    {owner:'Robin Williams',quote:' "No Matter What People Tell You, Words And Ideas Can Change The World." '},
    {owner:'Dwayne Johnson',quote:' "Wake Up Determined, Go To Bed Satisfied." '},
    {owner:'Walt Disney',quote:' "The way to get started is to quit talking and begin doing." '},
    {owner:'Steve Jobs',quote:' "Your time is limited, so do nott waste it living someone else s life. Do not be trapped by dogma – which is living with the results of other people s thinking." '},
    {owner:'John Lennon',quote:' "Life is what happens when you are busy making other plans." '},
    {owner:'Margaret Mead',quote:' "Always remember that you are absolutely unique. Just like everyone else." '},
    {owner:'Benjamin Franklin',quote:' "Tell me and I forget. Teach me and I remember. Involve me and I learn." '},
    {owner:'Robert Louis Stevenson',quote:' "Do Not judge each day by the harvest you reap but by the seeds that you plant." '},
    {owner:'Babe Ruth',quote:' "Never let the fear of striking out keep you from playing the game." '},
    {owner:'Ralph Waldo',quote:' "Life is a succession of lessons which must be lived to be understood." '},
    {owner:'Henry David Thoreau',quote:' "Go confidently in the direction of your dreams! Live the life you have imagined." '},
    {owner:'Marilyn Monroe',quote:' "Keep smiling, because life is a beautiful thing and there is so much to smile about." '},
];

var change = document.getElementById("change") ;
var quote = document.getElementById("quote");
var owner = document.getElementById("owner");
change.addEventListener('click',function(){
    let i = Math.floor(Math.random() * 14)+1;
    owner.innerHTML = Quotes[i]['owner'];
    quote.innerHTML = Quotes[i]['quote'];
});