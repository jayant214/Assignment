
window.onload = function(){     

	/////// Variables Declaration for Fields in CSV ////////////

	var batting_score=[]
	var wickets=[]
	var runs_conceded=[]
	var catches=[]
	var stumps=[]
	var opposition=[]
	var ground=[]
	var date=[]
	var match_result=[]
	var result_margin=[]
	var toss=[]
	var batting_innings=[]
	var data_csv=[]



	/////////////////////  Load CSV and store it in different variables ///////////////////

	d3.csv("sachin.csv", function(data) {
	  data_csv=data

	  for(i=0; i<463; i++){
		batting_score.push(data_csv[i].batting_score)
		wickets.push(String(data_csv[i].wickets))
		runs_conceded.push(data_csv[i].runs_conceded)
		catches.push(data_csv[i].catches)
		stumps.push(data_csv[i].stumps)
		opposition.push(String(data_csv[i].opposition))
		ground.push(data_csv[i].ground)
		data_csv.push(data_csv[i].date)
		match_result.push(data_csv[i].match_result)
		result_margin.push(data_csv[i].result_margin)
		toss.push(data_csv[i].toss)
		batting_innings.push(data_csv[i].batting_innings)
		
		}



	//////// Calculate Total Runs Innings in which Sachin lost his wicket and innings in which he remained not out ////////

	  var total_runs=0
	  var NaNs_in_batting=0		// No. of fields for which no data is available or in which he did not bat
	  var outs=0
	  var not_outs=0


	  for (i=0; i<463;i++){
	  	if(!isNaN(parseInt(batting_score[i]))){
	  		total_runs= total_runs + parseInt(batting_score[i])
	  		if (batting_score[i].indexOf('*') != -1){          // means field contains '*'. e.g. 127*
	  			not_outs +=1
	  		}else{
	  			outs += 1
	  		}

	  	}
	  	else{
	  		NaNs_in_batting += 1
	  	}	
	  	
	  }
	  	console.log('Total runs')
		console.log(total_runs)
		console.log('Total Not Outs')
		console.log(not_outs)
		console.log('Total Outs')
		console.log(outs)

	//////// Calculate Total Wickets //////////////////

		var total_wickets=0
		var NaNs_in_wickets =0
		for (i=0; i<463;i++){
		  	if(!isNaN(parseInt(wickets[i]))){
		  		total_wickets += parseInt(wickets[i])
		  	}
		  	else{
		  		NaNs_in_wickets += 1
		  	}
		  		
		  		//console.log(parseInt(total_runs))
		  	
		  }

		console.log('Total Wickets')
		console.log(total_wickets)
		//console.log(NaNs_in_wickets)



	/////////////// Calculate total catches ////////

		var total_catches=0
		var NaNs_in_catches =0
		for (i=0; i<463;i++){
		  	if(!isNaN(parseInt(catches[i]))){
		  		total_catches += parseInt(catches[i])
		  	}
		  	else{
		  		NaNs_in_catches += 1
		  	} 		
		  	
		  }
		console.log('total_catches')
		console.log(total_catches)


	/////////////// Calculate total runs conceded /////////////

		var total_runs_conceded=0
		var NaNs_in_runs_conceded =0		
		for (i=0; i<463;i++){
		  	if(!isNaN(parseInt(runs_conceded[i]))){
		  		total_runs_conceded += parseInt(runs_conceded[i])
		  	}
		  	else{
		  		NaNs_in_runs_conceded += 1
		  	} 		
		  	
		  }
		console.log('Total runs conceded')
		console.log(total_runs_conceded)


	///////////// (Batting average = Total Runs Scored/ No. of innings in which player got out) //////////////

		var batting_average = total_runs/outs

		console.log('Batting average is')
	 	console.log(batting_average)


	//////////////// bowling average////////////
	 	var bowled_in_matches = 463- NaNs_in_wickets
	 	bowling_average = total_runs_conceded/bowled_in_matches
	 	console.log('Bowling average is')
	 	console.log(bowling_average)


	////////////// wickets average ///////////////////

		var wickets_average= total_wickets/bowled_in_matches
		console.log('Wickets average is')
	 	console.log(wickets_average)

	////////////////////// Performance against each team ///////////////////////////////


		var runs_scored_vs_Aus=0
		var wickets_vs_Aus=0
		var runs_conceded_vs_Aus=0
		var runs_scored_vs_Eng=0
		var wickets_vs_Eng=0
		var runs_conceded_vs_Eng=0
		var runs_scored_vs_NZ=0
		var wickets_vs_NZ=0
		var runs_conceded_vs_NZ=0
		var runs_scored_vs_Nether=0
		var wickets_vs_Nether=0
		var runs_conceded_vs_Nether=0
		var runs_scored_vs_SL=0
		var wickets_vs_SL=0
		var runs_conceded_vs_SL=0
		var runs_scored_vs_Ban=0
		var wickets_vs_Ban=0
		var runs_conceded_vs_Ban=0
		var runs_scored_vs_WI=0
		var wickets_vs_WI=0
		var runs_conceded_vs_WI=0
		var runs_scored_vs_SA=0
		var wickets_vs_SA=0
		var runs_conceded_vs_SA=0
		var runs_scored_vs_Pak=0
		var wickets_vs_Pak=0
		var runs_conceded_vs_Pak=0
		var runs_scored_vs_Zim=0
		var wickets_vs_Zim=0
		var runs_conceded_vs_Zim=0
		var runs_scored_vs_Ken=0
		var wickets_vs_Ken=0
		var runs_conceded_vs_Ken=0
		var runs_scored_vs_UAE=0
		var wickets_vs_UAE=0
		var runs_conceded_vs_UAE=0
		var runs_scored_vs_Berm=0
		var wickets_vs_Berm=0
		var runs_conceded_vs_Berm=0
		var runs_scored_vs_Ire=0
		var wickets_vs_Ire=0
		var runs_conceded_vs_Ire=0
		var runs_scored_vs_Nam=0
		var wickets_vs_Nam=0
		var runs_conceded_vs_Nam=0


		for(i=0; i<463; i++){
			if(opposition[i].indexOf('Aus')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Aus += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Aus += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Aus += parseInt(wickets[i])
				}

			}

			else if(opposition[i].indexOf('Eng')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Eng += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Eng += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Eng += parseInt(wickets[i])
				}

			}

			else if(opposition[i].indexOf('South')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_SA += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_SA += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_SA += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('New')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_NZ += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_NZ += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_NZ += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('Sri')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_SL += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_SL += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_SL+= parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('West')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_WI += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_WI += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_WI += parseInt(wickets[i])
				}

			}



			else if(opposition[i].indexOf('Bang')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Ban += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Ban += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Ban += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('Pak')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Pak += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Pak += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Pak += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('Ken')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Ken += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Ken += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Ken += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('Zim')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Zim += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Zim += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Zim += parseInt(wickets[i])
				}

			}

			else if(opposition[i].indexOf('Nami')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Nam += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Nam += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Nam += parseInt(wickets[i])
				}

			}

			else if(opposition[i].indexOf('Berm')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Berm += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Berm += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Berm += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('U.A.E')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_UAE += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_UAE += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_UAE += parseInt(wickets[i])
				}

			}

			else if(opposition[i].indexOf('Nether')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Nether += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Nether += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Nether += parseInt(wickets[i])
				}

			}


			else if(opposition[i].indexOf('Ire')!= -1){
				if(!isNaN(parseInt(batting_score[i]))) {
					runs_scored_vs_Ire += parseInt(batting_score[i])
				}
				if(!isNaN(parseInt(runs_conceded[i]))) {
					runs_conceded_vs_Ire += parseInt(runs_conceded[i])
				}
				if(!isNaN(parseInt(wickets[i]))) {
					wickets_vs_Ire += parseInt(wickets[i])
				}

			}



		} // for

		console.log('Runs Scored vs Aus')
		console.log(runs_scored_vs_Aus)
		console.log('Runs conceded vs Aus')
		console.log(runs_conceded_vs_Aus)
		console.log('Wickets taken vs Aus')
		console.log(wickets_vs_Aus)

		console.log('Runs Scored vs Eng')
		console.log(runs_scored_vs_Eng)
		console.log('Runs conceded vs Eng')
		console.log(runs_conceded_vs_Eng)
		console.log('Wickets taken vs Eng')
		console.log(wickets_vs_Eng)

		console.log('Runs Scored vs SA')
		console.log(runs_scored_vs_SA)
		console.log('Runs conceded vs SA')
		console.log(runs_conceded_vs_SA)
		console.log('Wickets taken vs SA')
		console.log(wickets_vs_SA)

		console.log('Runs Scored vs New Zealand')
		console.log(runs_scored_vs_NZ)
		console.log('Runs conceded vs New Zealand')
		console.log(runs_conceded_vs_NZ)
		console.log('Wickets taken vs New Zealand')
		console.log(wickets_vs_NZ)

		console.log('Runs Scored vs Sri Lanka')
		console.log(runs_scored_vs_SL)
		console.log('Runs conceded vs Sri Lanka')
		console.log(runs_conceded_vs_SL)
		console.log('Wickets taken vs Sri Lanka')
		console.log(wickets_vs_SL)

		console.log('Runs Scored vs WI')
		console.log(runs_scored_vs_WI)
		console.log('Runs conceded vs WI')
		console.log(runs_conceded_vs_WI)
		console.log('Wickets taken vs WI')
		console.log(wickets_vs_WI)

		console.log('Runs Scored vs Bangladesh')
		console.log(runs_scored_vs_Ban)
		console.log('Runs conceded vs Bangladesh')
		console.log(runs_conceded_vs_Ban)
		console.log('Wickets taken vs Bangladesh')
		console.log(wickets_vs_Ban)

		console.log('Runs Scored vs Pak')
		console.log(runs_scored_vs_Pak)
		console.log('Runs conceded vs Pak')
		console.log(runs_conceded_vs_Pak)
		console.log('Wickets taken vs Pak')
		console.log(wickets_vs_Pak)

		console.log('Runs Scored vs Zim')
		console.log(runs_scored_vs_Zim)
		console.log('Runs conceded vs Zim')
		console.log(runs_conceded_vs_Zim)
		console.log('Wickets taken vs Zim')
		console.log(wickets_vs_Zim)

		console.log('Runs Scored vs Kenya')
		console.log(runs_scored_vs_Ken)
		console.log('Runs conceded vs Kenya')
		console.log(runs_conceded_vs_Ken)
		console.log('Wickets taken vs Kenya')
		console.log(wickets_vs_Ken)

		console.log('Runs Scored vs UAE')
		console.log(runs_scored_vs_UAE)
		console.log('Runs conceded vs UAE')
		console.log(runs_conceded_vs_UAE)
		console.log('Wickets taken vs UAE')
		console.log(wickets_vs_UAE)

		console.log('Runs Scored vs Namibia')
		console.log(runs_scored_vs_Nam)
		console.log('Runs conceded vs Namibia')
		console.log(runs_conceded_vs_Nam)
		console.log('Wickets taken vs Namibia')
		console.log(wickets_vs_Nam)

		console.log('Runs Scored vs Ireland')
		console.log(runs_scored_vs_Ire)
		console.log('Runs conceded vs Ireland')
		console.log(runs_conceded_vs_Ire)
		console.log('Wickets taken vs Ireland')
		console.log(wickets_vs_Ire)

		console.log('Runs Scored vs Netherland')
		console.log(runs_scored_vs_Nether)
		console.log('Runs conceded vs Netherland')
		console.log(runs_conceded_vs_Nether)
		console.log('Wickets taken vs Netherland')
		console.log(wickets_vs_Nether)

		console.log('Runs Scored vs Bermuda')
		console.log(runs_scored_vs_Berm)
		console.log('Runs conceded vs Bermuda')
		console.log(runs_conceded_vs_Berm)
		console.log('Wickets taken vs Bermuda')
		console.log(wickets_vs_Berm)

		


	//////////////////////////////// Constribution ///////////////////////////
	//// Winnig Contribution means team won the match and player scored more than or equal to 50 runs ////////
	//// Losing Contribution means team lost the match and player scored less than or equal to 10 runs //////
	//// Total 50s and 100s ///



		var match_winning_innings = 0
		var match_losing_innings=0
		var highest_score=0
		var total_50s=0
		var total_100s=0

		for (i=0; i<463;i++){
		  	if(!isNaN(parseInt(batting_score[i]))){
			  	if((String(match_result[i]) == 'won') && parseInt(batting_score[i]) >= 50) {
			  		match_winning_innings += 1
			  		total_50s += 1		  	
			  	}
			  	if((String(match_result[i]) == 'lost') && parseInt(batting_score[i]) <= 10) {
			  		match_losing_innings += 1
			  				  	
			  	}	
			 
		  	}
		  	if(parseInt(batting_score[i])> highest_score){
			 	highest_score=parseInt(batting_score[i])
			 }
			if(parseInt(batting_score[i])>= 100){
			 	total_100s += 1
			 }
		  }

		console.log('Match winning Innings')
		console.log(match_winning_innings)
		console.log('Match losing Innings')
		console.log(match_losing_innings)
		console.log('highest_score')
		console.log(highest_score)
		console.log('total 50s')
		console.log(total_50s)
		console.log('total 100s')
		console.log(total_100s)

		console.log('Pros of Sachin')
		console.log('On comparing with external data, Sachin has most career runs, highest 50s and 100s and most matches played')
		console.log('Sachin is the leading run scorer against Australia- the toughest team in Cricket.')
		console.log('')
		console.log('Cons of Sachin')
		console.log('Sachin lags behind in batting average, number of catches, bowling stats, winning-constribution to losing-contribution ratio')



	/////////////////////////////////////////////////// Create Set ///////////////
	///// This function returns unique elements in an array. Used it to know how many teams are there or how many
	///// different grounds were matches played in //////

	function create_set(arr){
		var arr1=[]
		arr1.push(arr[0])
		for(i=1; i< arr.length;i++){
			var repeated=0
			for(j=0; j< arr1.length; j++){
				if(arr[i] == arr1[j]){
				repeated=1;
				break;
				} 
			}
		
		if (repeated==0) {arr1.push(arr[i])}
		}
	 	return arr1
	 }

	///////////////////////////////// Visualization ////////////////////////////////////////
		var batting_chart=[]


		for (i=0; i<463; i++){
			if(!isNaN(parseInt(batting_score[i]))){
				batting_chart.push(parseInt(batting_score[i]))
			}
		}


	///////////////// Chart 1 ///////////////
	/// This chart shows batting record of all matches //////////


		var margin = {top: 30, right: 10, bottom: 30, left: 50}

		var height = 400 - margin.top - margin.bottom,
		width = 1000 - margin.left - margin.right,
		barWidth = 5,
		barOffset = 0;

		var dynamicColor;

		var yScale = d3.scale.linear()
		.domain([0, d3.max(batting_chart)])
		.range([0, height])

		var xScale = d3.scale.ordinal()
		.domain(d3.range(0, batting_chart.length))
		.rangeBands([0, width])

		var colors = d3.scale.linear()
		.domain([0, batting_chart.length * .33, batting_chart.length * .66, batting_chart.length])
		.range(['#d6e9c6', '#bce8f1', '#faebcc', '#ebccd1'])




		var sachin = d3.select('#batting-chart').append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background', '#bce8f1')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
		.selectAll('rect').data(batting_chart)
		.enter().append('rect')
		.style({
		    'fill': function (data, i) {
		        return colors(i);
		    }, 'stroke': '#31708f', 'stroke-width': '5'
		})
		.attr('width', xScale.rangeBand())
		.attr('x', function (data, i) {
		    return xScale(i);
		})
		.attr('height', 0)
		.attr('y', height)
		.on('mouseover', function (data) {
		    dynamicColor = this.style.fill;
		    d3.select(this)
		        .style('fill', '#3c763d')
		})

		.on('mouseout', function (data) {
		    d3.select(this)
		        .style('fill', dynamicColor)
		})

		sachin.transition()
		.attr('height', function (data) {
		    return yScale(data);
		})
		.attr('y', function (data) {
		    return height - yScale(data);
		})
		.delay(function (data, i) {
		    return i * 20;
		})
		.duration(2000)
		.ease('elastic')

		var verticalGuideScale = d3.scale.linear()
		.domain([0, d3.max(batting_chart)])
		.range([height, 0])

		var vAxis = d3.svg.axis()
		.scale(verticalGuideScale)
		.orient('left')
		.ticks(10)

		var verticalGuide = d3.select('svg').append('g')
		vAxis(verticalGuide)
		verticalGuide.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
		verticalGuide.selectAll('path')
		.style({fill: 'none', stroke: "#3c763d"})
		verticalGuide.selectAll('line')
		.style({stroke: "#3c763d"})

		var hAxis = d3.svg.axis()
		.scale(xScale)
		.orient('bottom')
		.ticks(batting_chart.size)

		var horizontalGuide = d3.select('svg').append('g')
		hAxis(horizontalGuide)
		horizontalGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
		horizontalGuide.selectAll('path')
		.style({fill: 'none', stroke: "#3c763d"})
		horizontalGuide.selectAll('line')
		.style({stroke: "#3c763d"});



/////////////////////////////////////////////


	d3.select("body").transition()
	    .style("background-color", "black")
	    .duration(3000);

	



	/////////////////// Pie Chart 1 //////////////////////
	/// Pie chart uses Chart.js    All other charts use D3.js

	var pieData1 = [
	   {
	      value: total_100s,
	      label: '100s',
	      color: '#FFE4C4'
	   },
	   {
	      value: total_50s,
	      label: '50s',
	      color: '#8B0000'
	   }
	   
	];

	var context = document.getElementById('pie1').getContext('2d');
	var skillsChart = new Chart(context).Pie(pieData1)


	/////////////////// Pie Chart 2 //////////////////////

	var pieData2 = [
	   {
	      value: match_losing_innings,
	      label: 'Match Losing Innings',
	      color: '#7FFFD4'
	   },
	   {
	      value: match_winning_innings,
	      label: 'Match Winning Innings',
	      color: '#BA55D3'
	   }
	   
	];

	var context = document.getElementById('pie2').getContext('2d');
	var skillsChart = new Chart(context).Pie(pieData2)

	

	////////////////////Chart 4 ////////////////////////////////////////
	//// Make a function to produce chart taking data and id of html element

		var produce_chart = function(data1 , id){

				var margin = {top: 20, right: 30, bottom: 30, left: 80},
			    width = 1060 - margin.left - margin.right,
			    height = 500 - margin.top - margin.bottom;

			var x = d3.scale.ordinal()
			    .rangeRoundBands([0, width], .1);

			var y = d3.scale.linear()
			    .range([height, 0]);

			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left");


			var chart = d3.select(id)
				.style('background', '#bee4f1')
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


			 x.domain(data1.map(function(d) { return d.name; }));
			  y.domain([0, d3.max(data1, function(d) { return d.value; })]);

			  chart.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis);

			  chart.append("g")
			      .attr("class", "y axis")
			      .call(yAxis);

			  chart.selectAll(".bar")
			      .data(data1)
			    .enter().append("rect")
			      .attr("class", "bar")
			      .attr("x", function(d) { return x(d.name); })
			      .attr("y", function(d) { return y(d.value); })
			      .attr("height", function(d) { return height - y(d.value); })
			      .attr("width", x.rangeBand());

		}


		var data3 = [
	  	{name: "Aus",    value:  runs_scored_vs_Aus},
	  	{name: "Eng",     value: runs_scored_vs_Eng},
	  	{name: "WI",    value:  runs_scored_vs_WI},
	  	{name: "SA",     value: runs_scored_vs_SA},
	  	{name: "Pak",    value:  runs_scored_vs_Pak},
	  	{name: "Ken",     value: runs_scored_vs_Ken},
	  	{name: "Nam",    value:  runs_scored_vs_Nam},
	  	{name: "NZ",     value: runs_scored_vs_NZ},
	  	{name: "Nether",    value:  runs_scored_vs_Nether},
	  	{name: "Berm",     value: runs_scored_vs_Berm},
	  	{name: "Zim",    value:  runs_scored_vs_Zim},
	  	{name: "Ban",     value: runs_scored_vs_Ban},
	  	{name: "SL",    value:  runs_scored_vs_SL},
	  	{name: "Ire",     value: runs_scored_vs_Ire},
	  	{name: "UAE",    value:  runs_scored_vs_UAE}
			];	


		id3 = '#svg3'

		produce_chart(data3,id3)

	/////////////////////Chart 5 /////////////////////////////////////////////


		var data4 = [
	  	{name: "Aus",    value:  wickets_vs_Aus},
	  	{name: "Eng",     value: wickets_vs_Eng},
	  	{name: "WI",    value:  wickets_vs_WI},
	  	{name: "SA",     value: wickets_vs_SA},
	  	{name: "Pak",    value:  wickets_vs_Pak},
	  	{name: "Ken",     value: wickets_vs_Ken},
	  	{name: "Nam",    value:  wickets_vs_Nam},
	  	{name: "NZ",     value: wickets_vs_NZ},
	  	{name: "Nether",    value:  wickets_vs_Nether},
	  	{name: "Berm",     value: wickets_vs_Berm},
	  	{name: "Zim",    value:  wickets_vs_Zim},
	  	{name: "Ban",     value: wickets_vs_Ban},
	  	{name: "SL",    value:  wickets_vs_SL},
	  	{name: "Ire",     value: wickets_vs_Ire},
	  	{name: "UAE",    value:  wickets_vs_UAE}
			];	

		id4 = '#svg4'
		produce_chart(data4,id4)



	/////////////////////////////// Chart 6 ////////////////////////////////

		var data5 = [
	  	{name: "Aus",    value:  runs_conceded_vs_Aus},
	  	{name: "Eng",     value: runs_conceded_vs_Eng},
	  	{name: "WI",    value:  runs_conceded_vs_WI},
	  	{name: "SA",     value: runs_conceded_vs_SA},
	  	{name: "Pak",    value:  runs_conceded_vs_Pak},
	  	{name: "Ken",     value: runs_conceded_vs_Ken},
	  	{name: "Nam",    value:  runs_conceded_vs_Nam},
	  	{name: "NZ",     value: runs_conceded_vs_NZ},
	  	{name: "Nether",    value:  runs_conceded_vs_Nether},
	  	{name: "Berm",     value: runs_conceded_vs_Berm},
	  	{name: "Zim",    value:  runs_conceded_vs_Zim},
	  	{name: "Ban",     value: runs_conceded_vs_Ban},
	  	{name: "SL",    value:  runs_conceded_vs_SL},
	  	{name: "Ire",     value: runs_conceded_vs_Ire},
	  	{name: "UAE",    value:  runs_conceded_vs_UAE}
			];	

		id5 = '#svg5'
		produce_chart(data5,id5)





	}); // d3 csv

} // window.onload
