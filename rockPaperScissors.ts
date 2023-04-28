function playRockPaperScissors() {
    const hands: string[] = ['rock', 'paper', 'scissors']

    interface Player {
        name: string
        getHand: () => string
    }

    function getHand(): string {
        let hand = parseInt((Math.random() * 10).toString()) % 3
        return hands[hand]
    }

    let player1: Player = {
        name: 'Lauren',
        getHand: getHand,
    }

    let player2: Player = {
        name: 'Dylan',
        getHand: getHand,
    }

    function playRound(player1: Player, player2: Player): Player | null {
        let hand1: string = player1.getHand()
        let hand2: string = player2.getHand()

        if (
            (hand1 === 'paper' && hand2 === 'scissors') ||
            (hand1 === 'rock' && hand2 === 'paper') ||
            (hand1 === 'scissors' && hand2 === 'rock')
        ) {
            console.log(
                `${player1.name} played ${hand1}. ${player2.name} played ${hand2}. ${player2.name} wins!`
            )
            return player2
        } else if (hand1 === hand2) {
            console.log(
                `${player1.name} played ${hand1}. ${player2.name} played ${hand2}. It's a tie!`
            )
            return null
        } else {
            console.log(
                `${player1.name} played ${hand1}. ${player2.name} played ${hand2}. ${player1.name} wins!`
            )
            return player1
        }
    }

    playRound(player1, player2)
}

playRockPaperScissors()

