Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Diff_1 = require("../scripts/util/Diff");
describe('Diff', function () {
    it('should be able to diff empty and a value', function () {
        var lcs = createLCS(Diff_1.default.compare('', 'a'));
        (0, chai_1.expect)(lcs).to.equal('');
    });
    it('should be able to diff a value and empty', function () {
        var lcs = createLCS(Diff_1.default.compare('a', ''));
        (0, chai_1.expect)(lcs).to.equal('');
    });
    it('should be able to diff an added character', function () {
        var lcs = createLCS(Diff_1.default.compare('a', 'ab'));
        (0, chai_1.expect)(lcs).to.equal('a');
    });
    it('should be able to diff same first character', function () {
        var lcs = createLCS(Diff_1.default.compare('ab', 'ac'));
        (0, chai_1.expect)(lcs).to.equal('a');
    });
    it('should be able to diff same last character', function () {
        var lcs = createLCS(Diff_1.default.compare('ac', 'bc'));
        (0, chai_1.expect)(lcs).to.equal('c');
    });
    it('should be able to diff different length differences', function () {
        var lcs = createLCS(Diff_1.default.compare('acd', 'bd'));
        (0, chai_1.expect)(lcs).to.equal('d');
    });
    it('should be able to diff a complex change', function () {
        var lcs = createLCS(Diff_1.default.compare('abcde', 'abdfe'));
        (0, chai_1.expect)(lcs).to.equal('abde');
    });
    it('should have longest runs up front', async () => {
        let diff = Diff_1.default.compare('abcde', 'abccde');
        let lcs = createLCS(diff);
        console.log(diff);
        (0, chai_1.expect)(lcs).to.equal('abcde');
        (0, chai_1.expect)(diff[0].item).to.equal('a');
        (0, chai_1.expect)(diff[3].operation).to.equal(1);
    });
});
function createLCS(diff) {
    diff.reverse();
    var lcs = [];
    for (var index = 0, length = diff.length; index < length; index++) {
        var diffItem = diff[index];
        if (diffItem.operation === 0) {
            lcs.push(diffItem.item);
        }
    }
    return lcs.join('');
}
//# sourceMappingURL=diffTest.js.map