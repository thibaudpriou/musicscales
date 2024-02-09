type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type Note = {
	name: string;
	/** note ordering */
	pitchIndex: NoteIndex;
	/**
	 * indicates that this note has an enharmonic equivalent that is more commonly used
	 */
	enharmonic?: boolean;
};
