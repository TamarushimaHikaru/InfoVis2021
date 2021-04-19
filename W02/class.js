class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    min() {
        i = this.x;
        if (i >= this.y) {
            i = this.y;
        }
        if (i >= this.z) {
            i = this.z;
        }
        return i;
    }

    max() {
        i = this.x;
        if (i <= this.y) {
            i = this.y;
        }
        if (i <= this.z) {
            i = this.z;
        }
        return i;
    }

    mid() {
        i = this.x;
        m = this.y;
        if (i >= m) {
            m = i;
            i = this.y;
        }
        if (i >= this.z) {
            m = i;
            i = this.z;
        }
        else {
            if (m >= this.z) {
                m = this.z;
            }
        }
        return m;
    }
}