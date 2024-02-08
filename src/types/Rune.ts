import * as math from 'mathjs';

// can import all of this as JSON
// needs a class type
// slot type
// damage formulas
// description
// icon?

export class Rune {
    private damageFormulas: string[];

    constructor(damageFormulas: string[]) {
        this.damageFormulas = damageFormulas;
    }

    calculateDamage(level: number, index: number): number {
        const substitutedExpression: string = this.damageFormulas[index].replace('{level}', level.toString());

        try {
            return math.evaluate(substitutedExpression);
        } catch (error) {
            console.error('Error evaluating the expression:', error);
            return NaN;
        }
    }
}