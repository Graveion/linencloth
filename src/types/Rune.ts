import * as math from 'mathjs';
import { PlayerClass } from './PlayerClass';

export enum RuneType {
    Basic = 'Basic',
    Heal = "Heal",
    Damage = "Damage",
}

export interface Rune {
    description: string;
    damageFormulas: string[];
    icon: string;
    playerClass: PlayerClass;
    slot: string;
    name: string;
}

export function calculateValues(level: number = 40, power: number = 0, damageFormulas: string[]): number[] {
    return damageFormulas.map(
        (formula: string, index: number): number => {
            const substitutedExpression: string = formula.replaceAll('{level}', level.toString());
            substitutedExpression.replaceAll('{power}', power.toString())
            
            try {
                return math.evaluate(substitutedExpression);
            } catch (error) {
                console.error('Error evaluating the expression:', error);
                return NaN;
            }
        })
}