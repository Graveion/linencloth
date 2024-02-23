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

export function calculateValues(level: number, damageFormulas: string[]): number[] {
    return damageFormulas.map(
        (formula: string, index: number): number => {
            const substitutedExpression: string = formula.replace('{level}', level.toString());

            try {
                return math.evaluate(substitutedExpression);
            } catch (error) {
                console.error('Error evaluating the expression:', error);
                return NaN;
            }
        })
}