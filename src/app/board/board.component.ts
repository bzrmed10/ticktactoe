import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  newWinner(winner){
    this.squares = Array(9).fill(null);
    this.winner = winner;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
 
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  
    this.winner = this.calculateWinner();
    if(this.winner){
      this.newWinner(this.winner)
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) { 
      const [a, b, c] = lines[i];

      // console.log({
      //   line : [a, b, c],
      //   a : this.squares[a],
      //   b : this.squares[b],
      //   c : this.squares[c],
      // }
      //   );
      
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
