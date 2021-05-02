const readLineSync = require("readline-sync");
const urlEncoderDecoder= ()=>{
    url = readLineSync.question('Please enter the URL\n');
    const encoder_url = encodeURI(url);
    const decoder_url = decodeURI(encoder_url);
    console.log(`\nurl Encoded from ${url} to ${encoder_url}`);
    console.log(`url Decoded from ${encoder_url} to ${decoder_url}`);
}
const base64EncodingDecoding=()=>{
    string_content = readLineSync.question('Please enter the string\n');
    const encode_base = Buffer.from(string_content).toString('base64');
    const decode_base = Buffer.from(encode_base,'base64').toString('ascii');
    console.log(`\nurl Encoded from ${string_content} to ${encode_base}`);
    console.log(`url Decoded from ${encode_base} to ${decode_base}`);

}
const stringHashing=()=>{
    string_content = readLineSync.question('Please enter the string\n');
    const crypto = require('crypto');
    hash_list=["md5", "sha1", "sha256", "sha512"];
    console.log()
    hash_list.map(algo);
    function algo(hash_name){
      console.log(`${string_content} in ${hash_name} format - ${crypto.createHash(hash_name).update(string_content).digest('hex')}` )}
  }
    
const epochConverters=()=>
{
  const year=readLineSync.question("enter year:\n");
  const month=readLineSync.question("enter month:\n");
  const date=readLineSync.question("enter date:\n");
  const hours=readLineSync.question("enter hours:\n");
  const minutes=readLineSync.question("enter minutes:\n");
  const seconds=readLineSync.question("enter seconds:\n");
  const date_number = new Date(year, month, date, hours, minutes, seconds);
  const to_epoch = date_number.getTime();
  const human_readable = new Date(to_epoch);
  const to_human_readable= human_readable.toGMTString();
  console.log(`epoch format for the given inputs : ${to_epoch}`);
  console.log(`human:readable format: ${human_readable}`);
}

const binDecHexOctConverter =()=>{
  const val=parseInt(readLineSync.question('\n1.Binary to Decimal \n2.Binary to Hex \n3.Binary to Octal \n4.Decimal to  \n5.Decimal to Hex \n6.Decimal to Octal \n7.Octal to Binary \n8.Octal to Decimal \n.9Octal to Hex \n10.Hex to Binary \n11.Hex to Octal \n12.Hex to Decimal\n'));
  const number = parseInt(readLineSync.question("Enter number which needs to be converted"))
  if(val==1){
    console.log(parseInt(number,2).toString(10));
  }else if(val==2){
    console.log(parseInt(number,2).toString(16));
  }else if(val ==3){
    console.log(parseInt(number,2).toString(8));
  }else if(val==4){
    console.log(parseInt(number,10).toString(2));
  }else if(val==5){
    console.log(parseInt(number,10).toString(16));
  }else if(val==6){
    console.log(parseInt(number,10).toString(8));
  }else if(val==7){
    console.log(parseInt(number,8).toString(2));
  }else if(val==8){
    console.log(parseInt(number,8).toString(10));
  }else if(val==9){
    console.log(parseInt(number,8).toString(16));
  }else if(val==10){
    console.log(parseInt(number,16).toString(2));
  }else if(val==11){
    console.log(parseInt(number,16).toString(8));
  }else if(val==12){
    console.log(parseInt(number,16).toString(10));
  }else{
    console.log('Invalid option');
  }
}

const rgb = ()=>{
  const red_val = (readLineSync.question('Enter red value\n'));
  const blue_val = (readLineSync.question('Ente blue value\n'));
  const green_val = (readLineSync.question('Enter green value\n'));
  const hex_val = "#" + hex_convert(red_val) + hex_convert(green_val) + hex_convert(blue_val);
  function hex_convert(val){
    var hex = Number(val).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  const rgb_val = hexToRgb(hex_val);
  function hexToRgb(hex_val){
    var aRgbHex = hex_val.substring(1,).match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
  }
  console.log(`\nrgbToehx ${red_val},${green_val},${blue_val} is ${hex_val}`);
  console.log(`\nhexTorgb ${hex_val} is ${rgb_val}`);
}

const unitConverter = ()=>{
  const selected_from = (readLineSync.question("Please select from coversion \n1.Celsius \n2.Fahrenheit \n3.Kelvin\n"));
  const selected_to =(readLineSync.question("Please selecte to coversion \n4.Celsius \n5.Fahrenheit \n6.Kelvin\n"));
  number = selected_from + selected_to
  val= (readLineSync.question("Please give value\n"));
  console.log(number);
  if(number==14){
    console.log(value);
  }
  else if(number==15){
    console.log((val * (9/5)) + 32);
  }
  else if(number==16){
    console.log(val + 273.15);
  }
  else if(number==24){
    console.log((val - 32) * (5/9));
  }
  else if(number==25){
    console.log(val);
  }
  else if(number==26){
    console.log(( (val - 32) * (5/9) ) + 273.15);
  }
  else if(number==34){
    console.log(val - 273.15);
  }
  else if(number==35){
    console.log(( (val - 273.15)  * (9/5) ) + 32);
  }
  else if(number==36){
    console.log(val);
  }

}
const main = ()=>
{
  console.log("Welcome to UtilityApp");
  loop: while(true)
  { console.log();
    const selectedUtilityOption = parseInt(readLineSync.question("Please select the required option \n1.URL Encoder/Decoder \n2.Base64 Encoding/Decoding \n3.String hashing \n4.Epoch Converters \n5.Binary/Decimal/Hex/Octal Converters \n6.RGB \n7.Unit Converters \n8.End Application\n"));
    switch(selectedUtilityOption)
    {
      case 1:
        urlEncoderDecoder();
        break;
      case 2:
        base64EncodingDecoding();
        break;
      case 3:
        stringHashing();
        break;
      case 4:
        epochConverters();
        break;
      case 5:
        binDecHexOctConverter();
        break;
      case 6:
        rgb();
        break;   
      case 7:
        unitConverter();
        break;
      case 8:
        console.log("Ended Application");
        break loop;
      default:
        console.log("Invalid input");
        break;
    }
  }
}

main();