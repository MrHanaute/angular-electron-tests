import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './CanvasJS';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  		let vendas = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		// exportEnabled: true,
		title: {
			text: "Produtos vendidos"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Fruta" },
				{ y: 55, label: "Limpeza" },
				{ y: 50, label: "Remedio" },
				{ y: 65, label: "Porcelana" },
				{ y: 95, label: "Chocolate" },
				{ y: 68, label: "Pao" },
				{ y: 28, label: "Trigo" },
				{ y: 14, label: "Tempero" },
				{ y: 33, label: "Lacticineos" },
				{ y: 52, label: "Bovinos" },
				{ y: 10, label: "Suinos" },
				{ y: 29, label: "Livros" },
				{ y: 16, label: "Cadernos" },
			]
		}]
	});
		
	let chart = new CanvasJS.Chart("chartContainer_percent", {
		// theme: "light2",
		animationEnabled: true,
		// exportEnabled: true,
		title:{
			text: "Mais caro"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 50000, name: "Estoque" },
				{ y: 3000, name: "Luz" },
				{ y: 2000, name: "Agua" },
				{ y: 200, name: "Limpeza" },
				{ y: 10000, name: "RH" },
				{ y: 150, name: "Outros"}
			]
		}]
	});

	vendas.render();
	chart.render();
  }

}
