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

export interface ClassPower {
    attackPower: number,
    spellPower: number,
    healingPower: number
}

export function calculateValues(level: number = 40, power: ClassPower, damageFormulas: string[]): number[] {
    return damageFormulas.map(
        (formula: string, index: number): number => {
            const substitutedExpression = formula
                .replaceAll('{level}', level.toString())
                .replaceAll('{ap}', power.attackPower.toString())
                .replaceAll('{sp}', power.spellPower.toString())
                .replaceAll('{hp}', power.healingPower.toString());
            
            try {
                return math.evaluate(substitutedExpression);
            } catch (error) {
                console.error('Error evaluating the expression:', error);
                return NaN;
            }
        })
}