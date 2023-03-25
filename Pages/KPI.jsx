import { StyleSheet, TextInput ,  Text, View, Dimensions  } from 'react-native';
export default function App() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /5 }]}  >

    <TextInput
        style={styles.input}
        placeholder="Search Here"
        keyboardType="ascii-capable"
      />



<View style={styles.TextWord}     >

<Text    style={styles.Word}     >KPI's  </Text>
</View>



    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -80 , height :windowHeight /1.8 } , styles.shadowProp]}>






<View style={styles.MainchartBox}       >


{/* <Text  style={styles.Heading}     >Manager</Text> */}
<View style={styles.chartBox}      >



{/* Chart1 */}
<View style={styles.Founder}    >
{/* Here Put The Chart  */}
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>

{/* Second Chart  */}
<View   style={styles.Founder}  >
{/* Here Put The Chart  */}
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>


</View>
{/* <Text  style={styles.Heading}     >Salesman</Text> */}
<View style={styles.chartBox}      >



{/* Chart1 */}
<View  style={styles.Founder}     >
{/* Here Put The Chart  */}
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>

{/* Second Chart  */}
<View     style={styles.Founder}   >
{/* Here Put The Chart  */}
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>


</View>







</View>








</View>


{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  } ]}  >




  <View    style={styles.InnerDiv}      >
    
    
    
    
       </View>
    </View>


 


    </View>
  );
}

const styles = StyleSheet.create({

  Heading:{
color : "#00308F", 
fontSize : 20 , 



  }, 
  Founder:{
    display : "flex", 
    flexDirection : "column", 
    justifyContent :"center",
    alignItems : "center", 
// backgroundColor : "red",
  }, 



  Number:{
fontSize : 14 ,
  }, 


BoldText:{
fontWeight  :"700"
}, 


  OuterText:{
    marginBottom : 20 
  }
,

  InnerMain:{
// display : "flex", 
// alignSelf :"flex-end", 
position : "absolute", 
bottom : 30  , 
paddingLeft : 20, 
} , 


MainchartBox:{
display :"flex",

flexDirection :"column",
  justifyContent : "center", 
 
  width : "100%", 
  height : "100%",
// backgroundColor : "blue"
  },


  InnerText:{
  
alignSelf : "flex-end", 

  },      
  chartBox:{
position : "relative", 
flexDirection : "row", 
justifyContent : "space-between",
// width : "100%" 
  }, 

  Word:{
    marginTop : 10 , 
    marginLeft : 20, 
    fontSize : 24,
    color : "white"
  }
,
shadowProp: {
  

},



InnerText:{
color :"orange"
}, 

  TextWord:{
alignSelf : "flex-start", 
color : "white"
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width  :290 , 
    backgroundColor :"white", 
    borderRadius : 20, 
  },
  container:{
    
    flex : 1, 
    justifyContent  : "space-between",
    alignItems : "center"
  }, 
  BoxText:{
color : "white"
  }, 
  firstRowofSquare:{
flexDirection : "row", 
marginBottom : 40,  

  }, 
  flexLine:{
display : "flex",
flexDirection :"row",
// backgroundColor : "red", 
justifyContent : "space-between",
width : "100%"
  }, 
  Box2:{ 
   elevation : 3 , 
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    borderBottomEndRadius : 12 , 
    borderBottomStartRadius :   12 ,
    marginTop : 50 ,
    borderColor : "black", 
    // borderWidth : 4,   
    padding : 12 ,
      flexDirection :"column",  
      alignItems : "center",
      justifyContent : "center"

  }, 
  Box1:{
    marginTop :24 , 
    // flex : 1, 
    justifyContent  :"center", 
    alignItems :"center", 
    borderBottomEndRadius : 12 , 
borderBottomStartRadius :   12 ,
    backgroundColor : "#005A9C", 
  }, 
  Box3:{
    alignSelf  : "flex-end", 
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
 
    backgroundColor: "#005A9C",   
  }, 
  square: {
    width: 100,
    marginRight : 40,
    flex  : 1, 
    justifyContent :"center", 
    alignItems : "center", 
    height: 100,
    // 
    backgroundColor: "#005A9C",
    borderRadius : 15,
  },
});
