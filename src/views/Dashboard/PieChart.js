import { Bar } from "vue-chartjs";
import db from '@/firebase/init.js';


export default{
  extends:Bar,
  data: () => ({
      chartdata: {
        labels:[],
        datasets: [
          {
            label: [],
             data:[],
            borderWidth:0.5,
            borderColor:[],
            backgroundColor:[],
            fill:false
          }
        ]
        
      },
      options: {
          maintainAspectRatio: false,
          responsive: true,
          scales:{
              yAxes:[{
                  ticks:{
                      min:0
                  }

              }]
          }
      }
    }),
  methods:{

    dynamicColor : function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgba(" + r + "," + g + "," + b + ", 0.5)";
  },
  
  fetchData : function(){

      db.collection('modules').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var color = this.dynamicColor()
            this.chartdata.datasets[0].data.push(doc.data().tutors.length)
            this.chartdata.datasets[0].borderColor.push(color)
            this.chartdata.datasets[0].backgroundColor.push(color)
            this.chartdata.labels.push(doc.data().code+'')
          })
          this.renderChart(this.chartdata,this.options)

        })


      }
    },

   mounted(){
      this.fetchData()
      
   },

  
  
  
}