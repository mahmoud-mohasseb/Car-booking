"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRefactoringTIMESTAMP = void 0;
class PostRefactoringTIMESTAMP {
    async up(queryRunner) {
        queryRunner.createDatabase('Cars', true);
    }
    async down(queryRunner) {
        queryRunner.dropDatabase('Cars', true);
    }
}
exports.PostRefactoringTIMESTAMP = PostRefactoringTIMESTAMP;
//# sourceMappingURL=PostRefactoringTIMESTAMP.js.map