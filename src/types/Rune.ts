import * as math from 'mathjs';

// can import all of this as JSON
// needs a class type
// slot type
// damage formulas
// description
// icon?

export enum RuneType {
    Basic = 'Basic',
    Heal = "Heal",
    Damage = "Damage",
}


export class Rune {
    private description: string;
    private damageFormulas: string[];
    private icon: string;
    private playerClass: string;
    private slot: string;

    constructor(description: string, damageFormulas: string[], icon: string, playerClass: string, slot: string) {
        this.description = description;
        this.damageFormulas = damageFormulas;
        this.icon = icon
        this.playerClass = playerClass;
        this.slot = slot;
    }

    getDescription(): string {
        return this.description
    }
    
    getIcon(): string {
        return this.icon
    }

    getPlayerClass(): string {
        return this.playerClass
    }

    getSlot(): string {
        return this.slot
    }

    calculateValues(level: number): number[] {
        return this.damageFormulas.map(
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

    // map over formulas -> return [] of calcs
    // replace {0}...{n} with calculated damage?
    // but how do we colour it?
    // or return a tuple of formulas?
    // replace {0} with 
}