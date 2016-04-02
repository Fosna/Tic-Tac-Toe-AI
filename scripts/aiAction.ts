import State from "./state";
import Ai from "./ai";


class AiAction {

    public movePosition: number;
    public minimaxVal: number;

    /*
     * Constructs an action that the ai player could make
     * @param pos [Number]: the cell position the ai would make its action in
     * made that action
     */
    constructor(pos) {
        // public : the position on the board that the action would put the letter on
        this.movePosition = pos;

        //public : the minimax value of the state that the action leads to when applied
        this.minimaxVal = 0;

        /*
         * public : applies the action to a state to get the next state
         * @param state [State]: the state to apply the action to
         * @return [State]: the next state
         */
    }
    
    applyTo(state: State) {
        var next = new State(state);

        //put the letter on the board
        next.board[this.movePosition] = state.turn;

        if(state.turn === "O")
            next.oMovesCount++;

        next.advanceTurn();

        return next;
    }
    
    /*
    * public static function that defines a rule for sorting AiActions in ascending manner
    * @param firstAction [AiAction] : the first action in a pairwise sort
    * @param secondAction [AiAction]: the second action in a pairwise sort
    * @return [Number]: -1, 1, or 0
    */
    public static ASCENDING(firstAction: AiAction, secondAction: AiAction) {
        if(firstAction.minimaxVal < secondAction.minimaxVal)
            return -1; //indicates that firstAction goes before secondAction
        else if(firstAction.minimaxVal > secondAction.minimaxVal)
            return 1; //indicates that secondAction goes before firstAction
        else
            return 0; //indicates a tie
    }

    /*
    * public static function that defines a rule for sorting AiActions in descending manner
    * @param firstAction [AiAction] : the first action in a pairwise sort
    * @param secondAction [AiAction]: the second action in a pairwise sort
    * @return [Number]: -1, 1, or 0
    */
    public static DESCENDING(firstAction: AiAction, secondAction: AiAction) {
        if(firstAction.minimaxVal > secondAction.minimaxVal)
            return -1; //indicates that firstAction goes before secondAction
        else if(firstAction.minimaxVal < secondAction.minimaxVal)
            return 1; //indicates that secondAction goes before firstAction
        else
            return 0; //indicates a tie
    }
};

export default AiAction;
