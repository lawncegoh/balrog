import { Line } from "vue-chartjs";
import db from '@/firebase/init.js';


export default{
  extends:Line,
  data: () => ({
    arr: [],
    ara: [],
      chartdata: {
        labels: Array.from({length:50},(v,k)=>k+1),
        datasets: [
          {
            label: "Number of Tutors",
            borderColor	: "#001f3f",
            data: null,
            fill: false,
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

            }],
            xAxes:[{
              ticks:{
                  min:0
              }

          }]
        }
      }
    }),
  methods:{
  
  fetchData : function(){

      

      db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().tutor == true) {
            this.arr.push(doc.data().rate)
            
          }
          })

          for (var p = 1; p < 51; p++ ) {
            var x = 0
            for (var i = 0; i < this.arr.length; i++) {
              if (this.arr[i] == p) {
                x++
              }
            }
            this.ara.push(x)
          }

          this.chartdata.datasets[0].data = this.ara
        this.renderChart(this.chartdata,this.options)

        })

      }
    },

   mounted(){
      this.fetchData()
   },

  
  
  
}


